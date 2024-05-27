const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen mx-auto">
      <div className="flex-grow">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
