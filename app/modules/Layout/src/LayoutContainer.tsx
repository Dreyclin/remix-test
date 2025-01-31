import React, { FC, PropsWithChildren } from "react";
import HeadNav from "./components/HeadNav";
import SideNav from "./components/SideNav";

const LayoutContainer: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <HeadNav />
            <SideNav />
            {children}
        </>
    );
};

export default LayoutContainer;
