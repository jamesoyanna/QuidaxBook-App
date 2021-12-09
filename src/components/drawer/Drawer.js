import React from 'react';
import RcDrawer from "rc-drawer";

const Drawer = ({
  className,
  children,
  closeButton,
  closeButtonStyle,
  drawerHandler,
  toggleHandler,
  open,
  width,
  placement,
  ...props
}) => {

  return (
    <>
      <RcDrawer
        open={open}
        onClose={toggleHandler}
        className={`drawer ${className ? className : ""}`.trim()}
        width={width}
        placement={placement}
        handler={false}
        level={null}
        duration=".4s"
        {...props}
      >
        {closeButton && (
          <div
            className="drawer__close"
            onClick={toggleHandler}
            style={closeButtonStyle}
          >
            {closeButton}
          </div>
        )}

        {children}
      </RcDrawer>
      <div
        className="drawer__handler"
        style={{ display: "inline-block" }}
        onClick={toggleHandler}
      >
        {drawerHandler}
      </div>
    </>
  );
};

Drawer.defaultProps = {
  width: "300px",
  placement: "left",
};

export default Drawer;
