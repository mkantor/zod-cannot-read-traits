import { z } from 'zod'

const Image = z.object({
  type: z.literal(['profile', 'banner']),
  url: z.string(),
  width: z.number(),
  height: z.number(),
})

const Tournament = z.object({
  id: z.number(),
  name: z.string(),
  slug: z.string(),
  startAt: z.number(),
  images: z.array(Image),
  city: z.nullable(z.string()),
  addrState: z.nullable(z.string()),
  countryCode: z.nullable(z.string()),
  isOnline: z.boolean,
  venueAddress: z.nullable(z.string()),
  mapsPlaceId: z.nullable(z.string()),
})

const StartggResponse = z.object({
  pageInfo: z.object({
    totalPages: z.number(),
  }),
  nodes: z.array(Tournament),
})

const input = {
  nodes: [
    {
      addrState: null,
      city: null,
      countryCode: null,
      id: 823671,
      images: [
        {
          type: 'profile',
          url: 'https://images.start.gg/images/tournament/823671/image-5b201a410655f865d59a9cbd7b0e5635.png',
          width: 2048,
          height: 2048,
        },
        {
          type: 'banner',
          url: 'https://images.start.gg/images/tournament/823671/image-fc95fcf9a89b8eb8f3a309113335bcdf.png',
          width: 1947,
          height: 902,
        },
      ],
      isOnline: true,
      mapsPlaceId: null,
      name: 'GACKED',
      slug: 'tournament/gacked',
      startAt: 1757406600,
      venueAddress: '',
    },
  ],

  pageInfo: {
    totalPages: 143,
  },
}

console.log(StartggResponse.parse(input))
