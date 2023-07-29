import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductInfo from "./ProductInfo";
import { ICatalogObject } from "../../utils/types/CatalogTypes";
import { useAppDispatch } from "../../redux/hooks";
import { addToCart } from "../../redux/cartSlice";

jest.mock("../../redux/hooks", () => ({
  useAppDispatch: jest.fn()
}));

// Create a mock product for testing
const mockProduct: ICatalogObject = {
  type: "ITEM",
  id: "123456789",
  updated_at: "2023-05-17T12:23:05.634Z",
  created_at: "2018-01-02T05:28:39.094Z",
  version: 1684326185634,
  is_deleted: false,
  catalog_v1_ids: [
    {
      catalog_v1_id: "089d8d0b-ff88-4c24-8098-a9f21b886fc0",
      location_id: "3K1HJD5MWBAFJ"
    }
  ],
  present_at_all_locations: false,
  present_at_location_ids: ["3K1HJD5MWBAFJ"],
  itemData: {
    name: "Test Product",
    abbreviation: "TP",
    label_color: "ff9da2a6",
    is_taxable: true,
    visibility: "PRIVATE",
    category_id: "T62DJVCZFV6T2MGEGXGWN2PW",
    tax_ids: ["Y2MROVZ3A5BDLBSENW5YKSXN"],
    variations: [
      {
        type: "ITEM_VARIATION",
        id: "CC3LWUWPIX4UFD4POJOYIHPA",
        updated_at: "2022-11-15T21:07:22.917Z",
        created_at: "2018-01-02T05:28:39.094Z",
        version: 1668546442917,
        is_deleted: false,
        catalog_v1_ids: [
          {
            catalog_v1_id: "870fbdcd-30f7-4166-aed0-4619ebd73740",
            location_id: "3K1HJD5MWBAFJ"
          }
        ],
        present_at_all_locations: false,
        present_at_location_ids: ["3K1HJD5MWBAFJ"],
        itemVariationData: {
          item_id: "123456789",
          name: "Regular",
          ordinal: 0,
          pricing_type: "FIXED_PRICING",
          priceMoney: {
            amount: 2000,
            currency: "CAD"
          },
          sellable: true,
          stockable: true
        }
      }
    ],
    product_type: "REGULAR"
  }
};

describe("ProductInfo Component", () => {
  test("renders product information", () => {
    render(<ProductInfo product={mockProduct} />);

    // Check if product name is present
    const productName = screen.getByText("Test Product");
    expect(productName).toBeInTheDocument();

    // Check if product price is present and formatted correctly
    const productPrice = screen.getByText("$20.00");
    expect(productPrice).toBeInTheDocument();

    // Check if product image is rendered
    const productImage = screen.getByAltText("Logo");
    expect(productImage).toBeInTheDocument();

    // Check if "Add to bag" button is present
    const addToBagButton = screen.getByText("Add to bag");
    expect(addToBagButton).toBeInTheDocument();
  });
});