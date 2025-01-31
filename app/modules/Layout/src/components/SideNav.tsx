//import {Link, useLocation, useNavigate} from "react-router-dom";

import HomeIcon from "@atlaskit/icon/core/migration/home";
//import BillingIcon from '@atlaskit/icon/glyph/billing';
import GraphLineIcon from "@atlaskit/icon/glyph/graph-line";
import OfficeBuildingIcon from "@atlaskit/icon/glyph/office-building";
import PersonIcon from "@atlaskit/icon/core/migration/person";
import PeopleGroupIcon from "@atlaskit/icon/core/migration/people-group--people";

import {
    LinkItem,
    //NavigationFooter,
    NavigationHeader,
    NestableNavigationContent,
    //NestingItem,
    Section,
    //GoBackItem,
    SideNavigation,
    Header,
} from "@atlaskit/side-navigation";

import { SideContainerStyle /*SideImageStyle*/ } from "../styles";
import { Link } from "@remix-run/react";

const SideNav = () => {
    //const { systems } = useStore(store => store.app);
    //const navigate = useNavigate();
    //const location = useLocation();
    //const routes = location.pathname.split('/').slice(1);

    /*const currentRoute = routes.find((route) =>
        matchPath(route.path, location.pathname)
    );*/

    return (
        <SideContainerStyle>
            <SideNavigation label={"kingsystem"}>
                <NavigationHeader>
                    <Header
                        component={({ children, ...props }) => (
                            <>
                                <Link to="/" {...props}>
                                    {children}
                                </Link>
                            </>
                        )}
                        //iconBefore={<SideImageStyle src={TestIcon} alt={'test_ico'} />}
                        description="Натисніть, щоб переключити відділ"
                    >
                        Відділ поширення
                    </Header>
                </NavigationHeader>
                <NestableNavigationContent
                    initialStack={[]}
                    testId="nestable-navigation-content"
                >
                    <Section isList>
                        <LinkItem //onClick={() => navigate("/")}
                            iconBefore={<HomeIcon label="" />}
                            //isSelected={routes[0]=== ''}
                        >
                            Головна
                        </LinkItem>
                        <LinkItem //onClick={() => navigate("/offers")}
                            iconBefore={<GraphLineIcon label="" />}
                            //isSelected={routes[0] === 'offers'}
                        >
                            Пропозиції
                        </LinkItem>
                        {/*<NestingItem
                            id="price"
                            title="Прайси"
                            iconBefore={<BillingIcon label="" />}
                            //isSelected={routes[0] === 'price'}
                            overrides={{
                                GoBackItem: {
                                    render: (props) => (
                                        <GoBackItem {...props}>На головну</GoBackItem>
                                    )
                                }
                            }}
                        >
                            <Section title="Сервіс" isList>
                                {systems.map(system => (
                                    <LinkItem key={system.id} onClick={() => navigate(`/price/${system.id}`)}
                                              isSelected={routes[0] === 'price' && routes[1] === String(system.id)}
                                    >
                                        {system.name}
                                    </LinkItem>
                                ))}
                            </Section>
                        </NestingItem>*/}
                        <LinkItem //onClick={() => navigate("/objects")}
                            iconBefore={<OfficeBuildingIcon label="" />}
                            //isSelected={routes[0] === 'objects'}
                        >
                            Об'єкти
                        </LinkItem>
                        <LinkItem //onClick={() => navigate("/service")}
                            iconBefore={<OfficeBuildingIcon label="" />}
                            //isSelected={routes[0] === 'service'}
                        >
                            Журнал сервісу
                        </LinkItem>
                        <LinkItem //onClick={() => navigate("/personal")}
                            iconBefore={<PersonIcon label="" />}
                            //isSelected={routes[0] === 'personal'}
                        >
                            Персонал
                        </LinkItem>
                        <LinkItem //onClick={() => navigate("/clients")}
                            iconBefore={<PeopleGroupIcon label="" />}
                            //isSelected={routes[0] === 'clients'}
                        >
                            Клієнти
                        </LinkItem>
                    </Section>
                </NestableNavigationContent>
                {/*<NavigationFooter>
                    <p style={{marginLeft: 20}}>Версія {config.VERSION} <sup>alpha</sup></p>
                </NavigationFooter>*/}
            </SideNavigation>
        </SideContainerStyle>
    );
};

export default SideNav;
