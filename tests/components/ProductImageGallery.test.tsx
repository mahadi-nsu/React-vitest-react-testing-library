import { render, screen, prettyDOM } from "@testing-library/react";
import ProductImageGallery from "../../src/components/ProductImageGallery";

describe("ProductImageGallery", () => {
  it("should render nothing if there are no images", () => {
    render(<ProductImageGallery imageUrls={[]} />);
    // console.log("response", response.container);
    const list = screen.queryByRole("list");
    expect(list).not.toBeInTheDocument();
  });

  it("first child should be null", () => {
    const imageUrls: string[] = [];
    const { container } = render(<ProductImageGallery imageUrls={imageUrls} />);
    // console.log("container-->", prettyDOM(container)); // No need to check for firstChild
    expect(container.firstChild).toBeNull();
  });

  it("should render correct number of images", () => {
    const imageUrls = ["image1.jpg", "image2.jpg"];
    render(<ProductImageGallery imageUrls={imageUrls} />);
    const list = screen.getByRole("list");
    expect(list.children.length).toBe(imageUrls.length);
  });

  it("should render images with correct src", () => {
    const imageUrls = ["image1.jpg", "image2.jpg"];
    render(<ProductImageGallery imageUrls={imageUrls} />);
    const images = screen.getAllByRole("img");
    images.forEach((image, index) => {
      console.log("image", prettyDOM(image));
      expect(image).toHaveAttribute("src", imageUrls[index]);
    });
  });
});
