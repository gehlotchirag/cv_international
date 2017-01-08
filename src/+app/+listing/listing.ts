import ListingProduct from './listing-product'

interface Listing {
    current_page: number,
    total_count: number,
    total_pages: number,
    previous_page: number,
    next_page: number,
    category_name: string,
    name:string,
    results: ListingProduct[]
}

export default Listing;