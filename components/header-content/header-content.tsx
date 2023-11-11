const HeaderContent = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="header-content">
      <div style={{ fontSize: "20px", fontWeight: "bold" }}>{title}</div>
    </div>
  );
};

export default HeaderContent;
