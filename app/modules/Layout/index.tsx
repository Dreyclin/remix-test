import React, {FC, PropsWithChildren} from 'react';
import LayoutContainer from "./src/LayoutContainer";

const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <LayoutContainer>
            { children }
        </LayoutContainer>
    );
};

export default Layout;