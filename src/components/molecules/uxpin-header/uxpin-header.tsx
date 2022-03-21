import React from "react"
import SVG from "react-inlinesvg"
import styles from "./uxpin-header.module.css"
import Thunder from "icons/thunder.svg";
import FullScreen from "icons/action-full-screen.svg";
import ArrowPlay from "icons/arrow-play.svg";
import CodeBlock from "icons/code-block.svg";
import IconButton from "components/atoms/icon-button/icon-button"
import Link from "components/atoms/link/link"
import ZoomControl, { ZoomType } from "components/atoms/zoom-control/zoom-control";
import Button from "components/atoms/button/button";

type UXPinHeaderProps = {

}

const UXPinHeader: React.FC<UXPinHeaderProps> = (props: UXPinHeaderProps) => {
    const [zoom, setZoom] = React.useState<number>(100);

    const decreaseBy25 = React.useCallback((n: number) => n - 25, []);
    const increaseBy25 = React.useCallback((n: number) => n + 25, []);
    const decreaseBy100 = React.useCallback((n: number) => n - 100, []);
    const increaseBy100 = React.useCallback((n: number) => n + 100, [])

    const onChangeZoom = (e: ZoomType | React.ChangeEvent<HTMLInputElement>) => {
        setZoom(() => {
            if (e === "in" || e === "out") {
                if (zoom < 100) {
                    if (e === "in") return increaseBy25(zoom);
                    return decreaseBy25(zoom)
                } else if (zoom < 200) {
                    if (e === "in") return increaseBy100(zoom);
                    return decreaseBy25(zoom);
                } else {
                    if (e === "in") return increaseBy100(zoom);
                    return decreaseBy100(zoom);
                }
            }

            return parseInt(e.target.value);
        })
    }

    return (
        <div className={styles.header}>
            <div className={styles["start-actions"]}>
                <Link href="#">Sign in</Link>
            </div>
            <div className={styles["main-actions"]}>
                <div>
                    <Button icon={<SVG src={ArrowPlay} width={10} height={10}/>} variant="neutral" weight="light" style={{background: "transparent", color: "var(--blue-base)"}}>Simulate</Button>
                </div>
                <div>
                    <Button icon={<SVG src={CodeBlock} width={12} height={12}/>} variant="neutral" weight="light" style={{color: "var(--gray-lighten10)"}}>Spec</Button>
                </div>
            </div>
            <div className={styles["end-actions"]}>
                <ZoomControl zoom={zoom} onChange={onChangeZoom} style={{marginRight: "30px"}}/>
                <IconButton iconSrc={Thunder} style={{width: "30px", height: "30px", background: "#0000001a"}} iconHeight={14} iconWidth={14}/>
                <IconButton iconSrc={FullScreen} style={{width: "30px", height: "30px"}} iconHeight={14} iconWidth={14}/>
            </div>
        </div>
    )
}

export default UXPinHeader;