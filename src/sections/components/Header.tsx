import { h, Fragment } from 'preact';
import styled from 'styled-components';
import useResponsiveTabs from '../../hooks/useResponsiveTabs';

const tabs = [
    { id: 'about', display: 'About' },
    { id: 'exp', display: 'Experience' },
    { id: 'skills', display: 'Skills' },
];

const Header = (): JSX.Element => {
    const { currentTabId, hasScrolled, handleTabClick } = useResponsiveTabs(tabs);

    return (
        <Fragment>
            <Socials>
                <Icon
                    src="assets/icons/icon_linkedin.png"
                    onClick={() => window.open('https://www.linkedin.com/in/ryan-henness')}
                />
                <Icon
                    src="assets/icons/icon_github.png"
                    onClick={() => window.open('https://github.com/ryan-henness-trimble')}
                />
                <Padding />
            </Socials>
            <HeadshotContainer>
                <Headshot src="assets/headshot.png" />
            </HeadshotContainer>
            <Name>Ryan Henness</Name>
            <Navbar id="nav" showShadow={hasScrolled}>
                {tabs.map((tab) => (
                    <NavTab
                        isActive={tab.id === currentTabId}
                        key={tab.id}
                        onClick={() => handleTabClick(tab.id)}>
                        {tab.display}
                    </NavTab>
                ))}
            </Navbar>
        </Fragment>
    );
};

export default Header;

const Socials = styled.div`
    align-items: center;
    background-color: white;
    display: flex;
    justify-content: flex-end;
    height: 2.25rem;
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 1;
`;

const Icon = styled.img`
    border-radius: 50%;
    cursor: pointer;
    height: var(--rem-24px);
    margin: var(--rem-2px);
    padding: var(--rem-2px);
    width: var(--rem-24px);

    &:hover {
        background-color: #f6f6f6;
    }

    &:active {
        background-color: #eeeeee;
    }
`;

const Padding = styled.div`
    width: var(--rem-8px);
`;

const HeadshotContainer = styled.div`
    background-color: white;
    display: flex;
    height: 100%;
    justify-content: center;
    width: 100%;
`;

const Headshot = styled.img`
    border: var(--rem-4px) solid var(--col-personal-blue);
    border-radius: 50%;
    box-shadow: 0 5px 28px 1px rgba(0, 0, 0, 0.2);
    height: ${(props) => (props.hide ? 'var(--rem-30px)' : '9rem')};
    margin-bottom: var(--rem-8px);
    transition: height 0.3s ease-in, width 0.3s ease-in;
    width: ${(props) => (props.hide ? '0' : '9rem')};
    z-index: 5;
`;

const Name = styled.div`
    background-color: white;
    display: flex;
    justify-content: center;
    font-family: 'Roboto Flex', sans-serif;
    font-size: 3rem;
    font-weight: 700;
    padding-bottom: var(--rem-16px);
    position: sticky;
    text-transform: uppercase;
    top: 2.25rem;
    z-index: 4;
`;

const Navbar = styled.div<{ showShadow?: boolean }>`
    background-color: white;
    box-shadow: ${(props) => (props.showShadow ? '0px 3px 32px 1px rgba(0, 0, 0, 0.175)' : 'none')};
    display: flex;
    justify-content: center;
    padding-bottom: var(--rem-24px);
    position: sticky;
    top: 6.8rem;
    transition: box-shadow 0.3s ease-in;
    z-index: 1;
`;

const NavTab = styled.div<{ isActive?: boolean }>`
    border-bottom: var(--rem-2px) solid ${(props) => (props.isActive ? '#648feb' : 'transparent')};
    cursor: pointer;
    font-size: var(--rem-18px);
    margin: 0 var(--rem-16px);
    padding: var(--rem-4px) 0;
    user-select: none;

    &:active {
        border-bottom: var(--rem-2px) solid var(--col-personal-blue);
    }

    @media (min-width: 450px) {
        &:hover:not(${(props) => !props.isActive}) {
            border-bottom: var(--rem-1px) solid var(--col-personal-blue);
        }
    }
`;
