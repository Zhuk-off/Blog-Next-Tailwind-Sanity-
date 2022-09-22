export interface Post {
  _id: string;
  _createdAt: string;
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
  comments: Comment[];
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
  body: Body[];
}

interface Body {
  _key: string;
  _type: string;
  children: Children[];
  level: number;
  listItem: string;
  markDefs: [Object];
  style: string;
}

interface Children {
  _key: string;
  _type: string;
  marks: [Object];
  text: string;
}

export interface Comment {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  approved: boolean;
  comment: string;
  email: string;
  name: string;
  post: {
    _ref: string;
    _type: string;
  };
}
