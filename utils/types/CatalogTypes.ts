export interface ICatalogV1Id {
	catalog_v1_id: string
	location_id: string
}

export interface IVariationCatalogV1Id {
	catalog_v1_id: string
	location_id: string
}

export interface IPriceMoney {
	amount: number
	currency: string
}

export interface IItemVariationData {
	item_id: string
	name: string
	ordinal: number
	pricing_type: string
	priceMoney: IPriceMoney
	sellable: boolean
	stockable: boolean
}

export interface IItemVariation {
	type: string
	id: string
	updated_at: string
	created_at: string
	version: number
	is_deleted: boolean
	catalog_v1_ids: IVariationCatalogV1Id[]
	present_at_all_locations: boolean
	present_at_location_ids: string[]
	itemVariationData: IItemVariationData
}

export interface IItemData {
	name: string
	abbreviation: string
	description?: string
	label_color: string
	is_taxable: boolean
	visibility: string
	category_id: string
	tax_ids: string[]
	variations: IItemVariation[]
	product_type: string
}

export interface ICatalogObject {
	type: string
	id: string
	updated_at: string
	created_at: string
	version: number
	is_deleted: boolean
	catalog_v1_ids: ICatalogV1Id[]
	present_at_all_locations: boolean
	present_at_location_ids: string[]
	itemData: IItemData
}
