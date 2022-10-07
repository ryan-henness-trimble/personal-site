import { h, Fragment } from 'preact';
import styled from 'styled-components';
import useResponsiveTabs from '../../hooks/useResponsiveTabs';
import { Scheme } from '../../hooks/useScheme';

const tabs = [
    { id: 'about', display: 'About' },
    { id: 'exp', display: 'Experience' },
    { id: 'projects', display: 'Projects' },
    { id: 'contact', display: 'Contact' },
];

interface Props {
    currentScheme: Scheme;
    onToggleScheme: (scheme: Scheme) => void;
}

const Header = (props: Props): JSX.Element => {
    const { currentTabId, hasScrolled, handleTabClick } = useResponsiveTabs(tabs);

    return (
        <Fragment>
            <TopRow>
                <ThemeToggle {...props} />
                <Resume
                    onClick={() =>
                        window.open(
                            'https://github.com/ryan-henness-trimble/personal-site/blob/main/Resume.pdf'
                        )
                    }>
                    Resume
                </Resume>
            </TopRow>
            <HeadshotContainer>
                <Headshot src="assets/headshot.png" alt="Headshot" />
            </HeadshotContainer>
            <Name>Ryan Henness</Name>
            <NavigationBar
                currentTabId={currentTabId}
                hasScrolled={hasScrolled}
                handleTabClick={handleTabClick}
            />
        </Fragment>
    );
};

export default Header;

const ThemeToggle = (props: Props) => (
    <Toggle>
        <ThemeControl
            onClick={() => props.onToggleScheme(props.currentScheme === 'dark' ? 'light' : 'dark')}>
            {props.currentScheme === 'light' ? '☀️' : '🌙'}
        </ThemeControl>
    </Toggle>
);

const NavigationBar = (props: {
    hasScrolled: boolean;
    currentTabId: string;
    handleTabClick: (tabId: string) => void;
}) => (
    <Navbar id="nav" showShadow={props.hasScrolled}>
        {tabs.map((tab) => (
            <NavTab
                isActive={tab.id === props.currentTabId}
                key={tab.id}
                onClick={() => props.handleTabClick(tab.id)}>
                {tab.display}
            </NavTab>
        ))}
    </Navbar>
);

const TopRow = styled.div`
    align-items: center;
    background-color: ${(props) => props.theme.background};
    display: flex;
    justify-content: flex-end;
    height: 2.5rem;
    padding: var(--rem-8px) 0;
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 4;
`;

const Toggle = styled.div`
    align-items: center;
    justify-content: center;
    margin-left: var(--rem-8px);
    display: flex;
`;

const ThemeControl = styled.div`
    cursor: pointer;
    transition: transform 0.4s ease-in;
    user-select: none;

    @media (hover: hover) {
        &:hover {
            transform: rotate(-0.1turn);
        }
    }
`;

const Resume = styled.div`
    align-items: center;
    border-radius: var(--rem-8px);
    border: var(--rem-1px) solid var(--col-personal-gray-darker);
    color: #6b6b6b;
    cursor: pointer;
    display: flex;
    font-size: var(--rem-12px);
    justify-content: center;
    margin: 0 var(--rem-16px) 0 var(--rem-8px);
    padding: 0 var(--rem-6px);
    transition: background-color 0.4s ease-in;

    @media (hover: hover) {
        &:hover {
            background-color: #f6f6f6;
        }
    }

    ${(props) =>
        props.theme.type === 'dark' &&
        `
        color: white;
        @media (hover: hover) {
            &:hover {
                background-color: #404040;
            }
        }
    `};
`;

const HeadshotContainer = styled.div`
    background-color: ${(props) => props.theme.background};
    display: flex;
    height: 100%;
    justify-content: center;
    width: 100%;
`;

const Headshot = styled.img`
    border: var(--rem-4px) solid ${(props) => props.theme.primary};
    border-radius: 50%;
    box-shadow: 0 var(--rem-4px) var(--rem-28px) var(--rem-1px)
        ${(props) =>
            props.theme.type === 'light'
                ? 'var(--box-shadow-header-light)'
                : 'var(--box-shadow-header-dark)'};
    height: ${(props) => (props.hide ? 'var(--rem-30px)' : '9rem')};
    margin-bottom: var(--rem-16px);
    transition: height 0.3s ease-in, width 0.3s ease-in;
    width: ${(props) => (props.hide ? '0' : '9rem')};
    z-index: 9;
`;

const Name = styled.div`
    background-color: ${(props) => props.theme.background};
    color: black;
    display: flex;
    justify-content: center;
    font-family: 'Roboto Flex', sans-serif;
    font-size: 3rem;
    font-weight: 700;
    padding: var(--rem-16px) 0;
    position: sticky;
    text-transform: uppercase;
    top: 3rem;
    white-space: nowrap;
    z-index: 8;

    ${(props) => props.theme.type === 'dark' && `color: white`}
`;

const Navbar = styled.div<{ showShadow?: boolean }>`
    background-color: ${(props) => props.theme.background};
    box-shadow: ${(props) => (props.showShadow ? 'var(--box-shadow-md)' : 'none')};
    display: flex;
    justify-content: center;
    padding-bottom: var(--rem-12px);
    position: sticky;
    top: 6.4rem;
    transition: box-shadow 0.3s ease-in;
    z-index: 4;
`;

const NavTab = styled.div<{ isActive?: boolean }>`
    border-bottom: var(--rem-2px) solid
        ${(props) => (props.isActive ? props.theme.primary : 'transparent')};
    color: #2b2b2b;
    cursor: pointer;
    font-size: var(--rem-18px);
    margin: 0 var(--rem-16px);
    padding: var(--rem-4px) 0;
    user-select: none;

    &:active {
        border-bottom: var(--rem-2px) ${(props) => props.theme.primary};
    }

    @media (hover: hover) {
        &:hover:not(${(props) => !props.isActive}) {
            border-bottom: var(--rem-1px) solid ${(props) => props.theme.primary};
        }
    }

    ${(props) => props.theme.type === 'dark' && `color: white`};
`;
