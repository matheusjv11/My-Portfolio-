import { Link } from "@/types/Link";
import { LinkButtonWrapper } from "./style";

export default function LinkButton ({
    title,
    url
}: Link) {
    return (
        <LinkButtonWrapper href={url} target="_blank">
            {title}
        </ LinkButtonWrapper>
    )
}