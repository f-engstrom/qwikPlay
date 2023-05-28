export const PAGE_QUERY = `query Page($pageSlug:String,$mainImageHeight:FloatType) {
  page(filter: {slug: {eq: $pageSlug}}) {
    title
    mainImage {
      url(imgixParams:{h:$mainImageHeight,fit:crop})
      title
    }
    content {
      value
    }
  }
}`;

export const PAGES_QUERY = `query Pages {
  allPages {
    title
    slug
    position
  }
}`;

export const CATALOGUE_QUERY = `query {
  allCategories {
    categoryName
  }
  allBrands {
    brandName
  }
}`;

export const HOMEPAGE_QUERY = `query HomePage($nrProducts:IntType,$mainImageHeight:FloatType,$productImagesHeight:FloatType) {
  startpage {
    title
    mainImage {
      url(imgixParams:{h:$mainImageHeight,fit:crop})
      title
    }
    content {
      value
    }
  }
  allProducts(first: $nrProducts) {
    id
    name
    price
    mainImage {
      url(imgixParams:{h:$productImagesHeight,fit:crop})
    }
  }
}`;

export const PRODUCT_QUERY = `query ProductQuery($slug:String,$imagesHeight:FloatType,$imagesWidth:FloatType) {
   product(filter: {slug: {eq: $slug}}) {
     id
    price
    name
    description {
      value
    }
    mainImage {
      url(imgixParams:{w:$imagesWidth,h:$imagesHeight,fit:crop})
      title
    }
    alternativeImages {
      url(imgixParams:{w:$imagesWidth,h:$imagesHeight,fit:crop})
      title
    }
  }
  
}`;

export const ALL_PRODUCT_IDS_QUERY = `query allProducts {
  allProducts {
    id
  }
}`;

export const ALL_PRODUCTS_QUERY = `query allProducts($productImagesHeight:FloatType) {
  allProducts {
    id
    name
    price
    slug
    shortDescription
    mainImage {
      url(imgixParams:{h:$productImagesHeight,fit:crop})
    }
  }
}`;
