import Bar from "components/atoms/bar/bar";
import React from "react";
import IconButton from 'components/atoms/icon-button/icon-button';
import LayoutMediumTileOutline from "icons/layout-medium-tile-outline.svg";
import BarItemGroup from 'components/atoms/bar-item-group/bar-item-group';
import Breadcrumbs from 'components/atoms/breadcrumbs/breadcrumbs';
import Link from 'components/atoms/link/link';
import Button from 'components/atoms/button/button';
import Separator from "components/atoms/separator/separator";
import withTooltip from "components/higher-order/with-tooltip/with-tooltip";

const IconButtonWithTooltip = withTooltip(IconButton);

const TopBar: React.FC<{}> = () => {
    return (
        <Bar style={{padding: "8px", alignItems: "center"}}>
            <BarItemGroup justify="left">
                <IconButtonWithTooltip iconSrc={LayoutMediumTileOutline} iconHeight={14} iconWidth={14} tooltip='Open Dashboard' tooltipPosition='bottom right'/>
                <Separator vertical margin="0px -4px 0 -10px"/>

                <Breadcrumbs crumbs={["Material UI", "Button"]}/>
            </BarItemGroup>

            <BarItemGroup justify="right">
                <Link>Discard Changes</Link>
                <Button size="small" style={{marginRight: "10px"}}>Save changes</Button>
            </BarItemGroup>
        </Bar>
    )
}

export default TopBar;