import { revalidateTag } from 'next/cache'

export const messageCache = {
  tag: {
    all() {
      return `messages:all`
    },
  },
  revalidate() {
    revalidateTag(this.tag.all())
  },
}
