export interface User {
  id: number
  name: string
  email: string
}

export interface ContextData {
  user: User | null
}

export interface AuthResponse {
  token: string
  user: User
}

export interface Category {
  slug: string
  title: string
}

export interface NewsItem {
  category: string
  content: string
  date: string
  description: string
  healine: string
  image: string
  location?: string
  subhealine: string
  url: string
}

export interface NewsSumaryItem {
  excerpt?: string
  header?: string
  image?: string
  title: string
  uri: string
}

export interface CategoryList {
  category: string
  categoryTitle: string
  items: Array<NewsSumaryItem>
  pagination: {
    currentPage: number
    totalPages: number
  }
}
