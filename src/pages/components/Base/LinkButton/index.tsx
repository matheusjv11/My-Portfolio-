import { Link } from "@/types/Link";
import { LinkButtonWrapper } from "@/styles/linkButton";

export default function LinkButton ({
    title,
    url
}: Link) {
    return (
        <LinkButtonWrapper href={url} target="_blank" rel="noreferrer">
            {title}
        </ LinkButtonWrapper>
    )
}