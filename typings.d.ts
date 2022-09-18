interface Post {
  _id: string;
  author: {
    image: {
      _type: string;
      asset: {
        _ref: string;
        _type: string;
      };
    };
    name: string;
  };
  description: string;
  mainImage: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  slug: {
    _type: string;
    current: string;
  };
  title: string;
  body: [object]
}
