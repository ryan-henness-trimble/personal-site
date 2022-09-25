import { h, Fragment } from 'preact';
import { useEffect, useState, useCallback } from 'preact/hooks';
import styled from 'styled-components';
import debounce from 'lodash.debounce';

interface Props {
    currentTabId: string;
    onSetCurrentTab: (tabId: string) => void;
    tabs: { id: string; display: string }[];
}

const Header = (props: Props): JSX.Element => {
    const [lastWindowScrollY, setLastWindowScrollY] = useState(window.scrollY);
    const [scrolled, setScrolled] = useState(false);
    const [shouldUpdateTabOnScroll, setShouldUpdateTabOnScroll] = useState(true);

    const handleTabClick = (tabId: string) => {
        props.onSetCurrentTab(tabId);
        setShouldUpdateTabOnScroll(false);
        window.scrollTo({
            top: getAbsoluteTabScrollOffset(tabId) - 300,
            behavior: 'smooth',
        });
    };

    const updateCurrentTab = useCallback(() => {
        const navbarOffset = getTabScrollOffset('nav') - 300;
        props.tabs.forEach((tab) => {
            if (getTabScrollOffset(tab.id) - navbarOffset < 550) {
                props.onSetCurrentTab(tab.id);
            }
        });
    }, [props]);

    const handleTabUpdate = useCallback(() => {
        if (shouldUpdateTabOnScroll) {
            updateCurrentTab();
        } else {
            setShouldUpdateTabOnScroll(lastWindowScrollY === window.scrollY);
        }
    }, [shouldUpdateTabOnScroll, lastWindowScrollY, updateCurrentTab]);

    const handleWindowScroll = useCallback(() => {
        setScrolled(window.scrollY > 200);
        setLastWindowScrollY(window.scrollY);
        if (shouldUpdateTabOnScroll) {
            handleTabUpdate();
        }
    }, [handleTabUpdate, shouldUpdateTabOnScroll]);

    useEffect(() => {
        if (shouldUpdateTabOnScroll) {
            window.addEventListener('scroll', debounce(handleWindowScroll, 50));
        }

        return () => {
            if (shouldUpdateTabOnScroll) {
                window.removeEventListener('scroll', debounce(handleWindowScroll, 50));
            }
        };
    }, [handleWindowScroll, shouldUpdateTabOnScroll]);

    return (
        <Fragment>
            <Socials>
                <Icon
                    src="assets/icons/icon_github.png"
                    onClick={() => window.open('https://github.com/ryan-henness-trimble')}
                />
                <Icon
                    src="assets/icons/icon_linkedin.png"
                    onClick={() => window.open('https://www.linkedin.com/in/ryan-henness')}
                />
            </Socials>
            <HeadshotContainer>
                <Headshot src="assets/headshot.png" />
            </HeadshotContainer>
            <Name>Ryan Henness</Name>
            <Navbar id="nav" showShadow={scrolled}>
                {props.tabs.map((tab) => (
                    <NavTab
                        isActive={tab.id === props.currentTabId}
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

const getAbsoluteTabScrollOffset = (tabId: string) => {
    const bodyRect = document.body.getBoundingClientRect();
    const tabRect = document.querySelector(`#${tabId}`)?.getBoundingClientRect();

    return tabRect ? tabRect?.top - bodyRect.top : 0;
};

const getTabScrollOffset = (tabId: string) => {
    const tabRect = document.querySelector(`#${tabId}`)?.getBoundingClientRect();

    return tabRect ? tabRect?.top : 0;
};

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
    margin: 0 var(--rem-2px);
    padding: var(--rem-4px);
    width: var(--rem-24px);

    &:hover {
        background-color: #f6f6f6;
    }

    &:active {
        background-color: #eeeeee;
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
    border: var(--rem-4px) solid #648feb;
    border-radius: 50%;
    box-shadow: var(--rem-0px) var(--rem-4px) var(--rem-28px) var(--rem-2px) rgba(0, 0, 0, 0.25);
    height: ${(props) => (props.hide ? 'var(--rem-30px)' : '12.5rem')};
    margin-bottom: var(--rem-8px);
    transition: height 0.3s ease-in, width 0.3s ease-in;
    width: ${(props) => (props.hide ? '0' : '12.5rem')};
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
    box-shadow: ${(props) => (props.showShadow ? '0px 5px 28px 1px rgba(0, 0, 0, 0.06)' : 'none')};
    display: flex;
    justify-content: center;
    padding-bottom: var(--rem-24px);
    position: sticky;
    top: 6.8rem;
    transition: box-shadow 0.3s ease-in, width 0.3s ease-in;
    z-index: 1;
`;

const NavTab = styled.div<{ isActive?: boolean }>`
    border-bottom: var(--rem-2px) solid ${(props) => (props.isActive ? '#262626' : 'transparent')};
    cursor: pointer;
    font-size: var(--rem-18px);
    margin: 0 var(--rem-16px);
    padding: var(--rem-4px) 0;
    user-select: none;

    &:active {
        border-bottom: var(--rem-2px) solid #262626;
    }

    @media (min-width: 450px) {
        &:hover:not(${(props) => !props.isActive}) {
            border-bottom: var(--rem-1px) solid #262626;
        }
    }
`;
