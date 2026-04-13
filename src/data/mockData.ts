export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
}

export interface Track {
  id: string;
  title: string;
  artist: string;
  cover: string;
  // URL для iframe Яндекс.Музыки вида https://music.yandex.ru/iframe/album/{albumId}/track/{trackId}
  // Получить можно в десктопном Яндекс.Музыке: трек → Поделиться → HTML-код
  iframeSrc: string;
}

export interface Post {
  id: string;
  user: User;
  track: Track;
  createdAt: string;
}

export interface FollowUser extends User {
  isFollowing: boolean;
}

export const currentUser = {
  id: 'me',
  name: 'Максим Харитонов',
  username: '@khariton_m',
  avatar: 'https://i.pravatar.cc/150?img=12',
  followersCount: 284,
  followingCount: 153,
  tracksCount: 412,
};

export const followingList: FollowUser[] = [
  { id: 'u1', name: 'Аня Соколова',   username: '@anya_sokolova', avatar: 'https://i.pravatar.cc/150?img=47', isFollowing: true },
  { id: 'u2', name: 'Миша Орлов',     username: '@m_orlov',       avatar: 'https://i.pravatar.cc/150?img=33', isFollowing: true },
  { id: 'u3', name: 'Лера Новикова',  username: '@lera_nova',     avatar: 'https://i.pravatar.cc/150?img=56', isFollowing: true },
  { id: 'u4', name: 'Денис Волков',   username: '@dvolkov',       avatar: 'https://i.pravatar.cc/150?img=21', isFollowing: true },
  { id: 'u5', name: 'Катя Морозова',  username: '@k_morozova',    avatar: 'https://i.pravatar.cc/150?img=44', isFollowing: true },
  { id: 'u6', name: 'Саша Белов',     username: '@sasha_belov',   avatar: 'https://i.pravatar.cc/150?img=15', isFollowing: false },
  { id: 'u7', name: 'Оля Петрова',    username: '@o_petrova',     avatar: 'https://i.pravatar.cc/150?img=49', isFollowing: true },
];

// Рабочие iframe-URL Яндекс.Музыки (получены через «Поделиться → HTML-код»)
const YM = {
  MsFatBooty:   'https://music.yandex.ru/iframe/album/489097/track/4311924',
} as const;

export const mockPosts: Post[] = [
  {
    id: 'p1',
    user: { id: 'u1', name: 'Аня Соколова', username: '@anya_sokolova', avatar: 'https://i.pravatar.cc/150?img=47' },
    track: {
      id: 't1',
      title: 'Ms. Fat Booty',
      artist: 'Mos Def',
      cover: 'https://picsum.photos/seed/mosdef/80/80',
      iframeSrc: YM.MsFatBooty,
    },
    createdAt: '2 минуты назад',
  },
  {
    id: 'p2',
    user: { id: 'u2', name: 'Миша Орлов', username: '@m_orlov', avatar: 'https://i.pravatar.cc/150?img=33' },
    track: {
      id: 't2',
      title: 'Umi Says',
      artist: 'Mos Def',
      cover: 'https://picsum.photos/seed/umisays/80/80',
      iframeSrc: YM.MsFatBooty,
    },
    createdAt: '14 минут назад',
  },
  {
    id: 'p3',
    user: { id: 'u3', name: 'Лера Новикова', username: '@lera_nova', avatar: 'https://i.pravatar.cc/150?img=56' },
    track: {
      id: 't3',
      title: 'Mathematics',
      artist: 'Mos Def',
      cover: 'https://picsum.photos/seed/math/80/80',
      iframeSrc: YM.MsFatBooty,
    },
    createdAt: '37 минут назад',
  },
  {
    id: 'p4',
    user: { id: 'u4', name: 'Денис Волков', username: '@dvolkov', avatar: 'https://i.pravatar.cc/150?img=21' },
    track: {
      id: 't4',
      title: 'Thieves In The Night',
      artist: 'Black Star',
      cover: 'https://picsum.photos/seed/blackstar/80/80',
      iframeSrc: YM.MsFatBooty,
    },
    createdAt: '1 час назад',
  },
  {
    id: 'p5',
    user: { id: 'u5', name: 'Катя Морозова', username: '@k_morozova', avatar: 'https://i.pravatar.cc/150?img=44' },
    track: {
      id: 't5',
      title: 'Definition',
      artist: 'Black Star',
      cover: 'https://picsum.photos/seed/definition/80/80',
      iframeSrc: YM.MsFatBooty,
    },
    createdAt: '2 часа назад',
  },
  {
    id: 'p6',
    user: { id: 'u6', name: 'Саша Белов', username: '@sasha_belov', avatar: 'https://i.pravatar.cc/150?img=15' },
    track: {
      id: 't6',
      title: 'The Talib Kweli Show',
      artist: 'Talib Kweli',
      cover: 'https://picsum.photos/seed/talib/80/80',
      iframeSrc: YM.MsFatBooty,
    },
    createdAt: '3 часа назад',
  },
  {
    id: 'p7',
    user: { id: 'u7', name: 'Оля Петрова', username: '@o_petrova', avatar: 'https://i.pravatar.cc/150?img=49' },
    track: {
      id: 't7',
      title: 'Get By',
      artist: 'Talib Kweli',
      cover: 'https://picsum.photos/seed/getby/80/80',
      iframeSrc: YM.MsFatBooty,
    },
    createdAt: '4 часа назад',
  },
  {
    id: 'p8',
    user: { id: 'u1', name: 'Аня Соколова', username: '@anya_sokolova', avatar: 'https://i.pravatar.cc/150?img=47' },
    track: {
      id: 't8',
      title: 'Brown Skin Lady',
      artist: 'Black Star',
      cover: 'https://picsum.photos/seed/brownskin/80/80',
      iframeSrc: YM.MsFatBooty,
    },
    createdAt: '5 часов назад',
  },
  {
    id: 'p9',
    user: { id: 'u2', name: 'Миша Орлов', username: '@m_orlov', avatar: 'https://i.pravatar.cc/150?img=33' },
    track: {
      id: 't9',
      title: 'Respiration',
      artist: 'Black Star',
      cover: 'https://picsum.photos/seed/respiration/80/80',
      iframeSrc: YM.MsFatBooty,
    },
    createdAt: '6 часов назад',
  },
  {
    id: 'p10',
    user: { id: 'u3', name: 'Лера Новикова', username: '@lera_nova', avatar: 'https://i.pravatar.cc/150?img=56' },
    track: {
      id: 't10',
      title: 'K.O.S. (Determination)',
      artist: 'Black Star',
      cover: 'https://picsum.photos/seed/kos/80/80',
      iframeSrc: YM.MsFatBooty,
    },
    createdAt: '7 часов назад',
  },
  {
    id: 'p11',
    user: { id: 'u4', name: 'Денис Волков', username: '@dvolkov', avatar: 'https://i.pravatar.cc/150?img=21' },
    track: {
      id: 't11',
      title: 'Astronomy (8th Light)',
      artist: 'Black Star',
      cover: 'https://picsum.photos/seed/astronomy/80/80',
      iframeSrc: YM.MsFatBooty,
    },
    createdAt: '8 часов назад',
  },
  {
    id: 'p12',
    user: { id: 'u5', name: 'Катя Морозова', username: '@k_morozova', avatar: 'https://i.pravatar.cc/150?img=44' },
    track: {
      id: 't12',
      title: 'Hater Players',
      artist: 'Mos Def',
      cover: 'https://picsum.photos/seed/haterplayers/80/80',
      iframeSrc: YM.MsFatBooty,
    },
    createdAt: 'вчера',
  },
  {
    id: 'p13',
    user: { id: 'u6', name: 'Саша Белов', username: '@sasha_belov', avatar: 'https://i.pravatar.cc/150?img=15' },
    track: {
      id: 't13',
      title: 'Brooklyn',
      artist: 'Mos Def',
      cover: 'https://picsum.photos/seed/brooklyn/80/80',
      iframeSrc: YM.MsFatBooty,
    },
    createdAt: 'вчера',
  },
  {
    id: 'p14',
    user: { id: 'u7', name: 'Оля Петрова', username: '@o_petrova', avatar: 'https://i.pravatar.cc/150?img=49' },
    track: {
      id: 't14',
      title: 'Do It Now',
      artist: 'Mos Def',
      cover: 'https://picsum.photos/seed/doitnow/80/80',
      iframeSrc: YM.MsFatBooty,
    },
    createdAt: '2 дня назад',
  },
  {
    id: 'p15',
    user: { id: 'u1', name: 'Аня Соколова', username: '@anya_sokolova', avatar: 'https://i.pravatar.cc/150?img=47' },
    track: {
      id: 't15',
      title: 'Mr. Nigga',
      artist: 'Mos Def',
      cover: 'https://picsum.photos/seed/mrnigga/80/80',
      iframeSrc: YM.MsFatBooty,
    },
    createdAt: '3 дня назад',
  },
];
