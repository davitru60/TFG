export interface Project {
  project_id: number;
  name: string;
  description: string;
  path: string;
}

export interface ProjectGet {
  success: boolean;
  data: {
    projects: Project[];
  };
}

export interface ProjectPost{
  name: string;
  description: string;
  path: string;
}

export interface ProjectPut{
  name: string;
  description: string;
  path: string;
}

export interface ProjectImagesResponse {
  success: boolean;
  data: {
    images: string[];
  };
}

export interface TextPut{
  title:string;
  text:string;
  proj_text_id:string,
  previousIndex: number;
}

export interface TextPost{
  project_id:number,
  f_type_id:number;
  title:string;
  text:string;
  index:number;

}

export interface ImageOrderPut {
  proj_img_id: number;
  previousIndex: number;
  newIndex: number;
}

export interface EditorOrderPut {
  proj_text_id: number;
  previousIndex: number;
  newIndex: number;
}

export interface FormFields {
  f_type_id: number;
  proj_img_id?: string;
  proj_text_id?: string;
  path?: string;
  text?: string;
  title?: string;
  image?: any;
  index?: number;
}

export interface Category{
  category_id:number,
  name:string
}

export interface CategoryGet {
  success: boolean;
  data: {
    categories: Category[];
  };
}

export interface CategoryPost{
  name:string;
}

export interface CategoryPut{
  name:string;
}

export interface ProjectCategory{
  proj_cat_id: number,
  project_id:number,
  category_id:number
}


export interface ProjectCategoryPost{
  project_id:number;
  category_id:number;

}