import { h, Fragment } from 'preact';
import styled from 'styled-components';
import useResponsiveTabs from '../../hooks/useResponsiveTabs';

const tabs = [
    { id: 'about', display: 'About' },
    { id: 'exp', display: 'Experience' },
    { id: 'contact', display: 'Contact' },
];

const Header = (): JSX.Element => {
    const { currentTabId, hasScrolled, handleTabClick } = useResponsiveTabs(tabs);

    return (
        <Fragment>
            <Socials>
                <Resume
                    onClick={() =>
                        window.open(
                            'https://github.com/ryan-henness-trimble/personal-site/assets/resume.pdf'
                        )
                    }>
                    Resume
                </Resume>
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
    height: 2.5rem;
    padding: var(--rem-8px) 0;
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 1;
`;

const Resume = styled.div`
    align-items: center;
    border-radius: var(--rem-8px);
    border: var(--rem-1px) solid var(--col-personal-gray);
    cursor: pointer;
    display: flex;
    font-size: var(--rem-12px);
    margin: 0 var(--rem-16px);
    padding: 0 var(--rem-6px);
    justify-content: center;

    @media (min-width: 450px) {
        @media (min-width: 450px) {
            &:hover {
                background-color: #f6f6f6;
            }
        }
    }
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
    margin-bottom: var(--rem-16px);
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
    padding: var(--rem-16px) 0;
    position: sticky;
    text-transform: uppercase;
    top: 3rem;
    z-index: 4;
`;

const Navbar = styled.div<{ showShadow?: boolean }>`
    background-color: white;
    box-shadow: ${(props) => (props.showShadow ? '0px 3px 22px 1px rgba(0, 0, 0, 0.175)' : 'none')};
    display: flex;
    justify-content: center;
    padding-bottom: var(--rem-12px);
    position: sticky;
    top: 6.4rem;
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
