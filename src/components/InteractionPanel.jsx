import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';

const InteractionPanel = ({ votes }) => {
    return (
        <section>
            <span className="Span-interaction-panel">
                <ThumbUpOutlinedIcon fontSize="medium"/>
                <h4>{votes}</h4>
                <ThumbDownAltOutlinedIcon fontSize="medium"/>
            </span>
        </section>
    )
}

export default InteractionPanel;