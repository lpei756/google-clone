export interface GoogleSearchRequest {
    count?: number,
    startIndex?: number,
    searchTerms: string
}

export interface GoogleSearchResponse {
    searchInformation: SearchInformation,
    queries: QueryInformation,
    items: QueryResultItem,
    kind: string
}

export interface SearchInformation {
    searchTime: number,
    formattedSearchTime: string,
    totalResults: number,
    formattedTotalResults: string
}

export interface QueryInformation {
    nextPage: GoogleSearchRequest[],
    request: GoogleSearchRequest[]
}

export interface QueryResultItem {
    displayLink: string,
    formattedUrl: string,
    htmlFormattedUrl: string,
    snippet: string;
    link: string;
    htmlSnippet: string,
    title: string
}