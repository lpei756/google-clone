import React from "react";
import {useRouter} from "next/router";


const SearchPage: React.FunctionComponent = () => {
    const router = useRouter();
    const {q} = router.query;

    return (
        <div>
            {
                // TODO: Search Page
            }
            Search Page: {q}
        </div>
    )
}

export default SearchPage;