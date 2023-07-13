import "./buttons.css";


const RoundLinkButton = (props: { url: string, name: string, glowing?: boolean}) => {
    return <a className={"round-button " + (props.glowing && "btn-glow")} href={props.url}>{props.name}</a>
};

export default RoundLinkButton;