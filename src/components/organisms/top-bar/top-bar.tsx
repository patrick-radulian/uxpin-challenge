import Bar from "components/atoms/bar/bar";
import React from "react";
import IconButton from 'components/atoms/icon-button/icon-button';
import Dashboard from "icons/dashboard.svg";
import BarItemGroup from 'components/atoms/bar-item-group/bar-item-group';
import Breadcrumbs from 'components/atoms/breadcrumbs/breadcrumbs';
import Link from 'components/atoms/link/link';
import withTooltip from 'components/higher-order/with-tooltip';
import Button from 'components/atoms/button/button';
import Separator from "components/atoms/separator/separator";

const LinkWithTooltip = withTooltip(Link);
const IconButtonWithTooltip = withTooltip(IconButton);

const TopBar: React.FC<{}> = () => {
    return (
        <Bar style={{padding: "8px", alignItems: "center"}}>
            <BarItemGroup justify="left">
                <IconButtonWithTooltip iconSrc={Dashboard} alt="Dashboard" tooltip='Open Dashboard' tooltipPosition='bottom'/>
                <Separator vertical margin="0 16px 0 11px"/>

                <Breadcrumbs crumbs={["Material UI", "Button"]}/>
            </BarItemGroup>

            <BarItemGroup justify="right">
                <LinkWithTooltip tooltip='Here, there be tooltip' linkTo="https://google.com">Discard Changes</LinkWithTooltip>
                <Button style={{margin: "0 7px"}}>Save Changes</Button>
            </BarItemGroup>
        </Bar>
    )
}

export default TopBar;