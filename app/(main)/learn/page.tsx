import { FeedWrapper } from "@/components/wrappers/feed-wrapper";
import { StickyWrapper } from "@/components/wrappers/sticky-wrapper";

const LearnPage = ()=>{

    return(
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                hello
            </StickyWrapper>

<FeedWrapper>
    Feed Wrapper
</FeedWrapper>

        </div>
    )

}

export default LearnPage;