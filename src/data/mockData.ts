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
  // Получить: десктопная Яндекс.Музыка → трек → Поделиться → HTML-код
  // Формат src: https://music.yandex.ru/iframe/album/{albumId}/track/{trackId}
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
  { id: 'u1', name: 'Аня Соколова',  username: '@anya_sokolova', avatar: 'https://i.pravatar.cc/150?img=47', isFollowing: true },
  { id: 'u2', name: 'Миша Орлов',    username: '@m_orlov',       avatar: 'https://i.pravatar.cc/150?img=33', isFollowing: true },
  { id: 'u3', name: 'Лера Новикова', username: '@lera_nova',     avatar: 'https://i.pravatar.cc/150?img=56', isFollowing: true },
  { id: 'u4', name: 'Денис Волков',  username: '@dvolkov',       avatar: 'https://i.pravatar.cc/150?img=21', isFollowing: true },
  { id: 'u5', name: 'Катя Морозова', username: '@k_morozova',    avatar: 'https://i.pravatar.cc/150?img=44', isFollowing: true },
  { id: 'u6', name: 'Саша Белов',    username: '@sasha_belov',   avatar: 'https://i.pravatar.cc/150?img=15', isFollowing: false },
  { id: 'u7', name: 'Оля Петрова',   username: '@o_petrova',     avatar: 'https://i.pravatar.cc/150?img=49', isFollowing: true },
];

const ym = (albumId: string, trackId: string) =>
  `https://music.yandex.ru/iframe/album/${albumId}/track/${trackId}`;

export const mockPosts: Post[] = [
  {
    id: 'p1',
    user: { id: 'u1', name: 'Аня Соколова', username: '@anya_sokolova', avatar: 'https://i.pravatar.cc/150?img=47' },
    track: {
      id: 't1',
      title: 'The Hills',
      artist: 'The Weeknd',
      cover: 'https://picsum.photos/seed/thehills/80/80',
      iframeSrc: ym('29644890', '24948471'),
    },
    createdAt: '2 минуты назад',
  },
  {
    id: 'p2',
    user: { id: 'u2', name: 'Миша Орлов', username: '@m_orlov', avatar: 'https://i.pravatar.cc/150?img=33' },
    track: {
      id: 't2',
      title: 'Blinding Lights',
      artist: 'The Weeknd',
      cover: 'https://picsum.photos/seed/blindinglights/80/80',
      iframeSrc: ym('12105346', '60292250'),
    },
    createdAt: '14 минут назад',
  },
  {
    id: 'p3',
    user: { id: 'u3', name: 'Лера Новикова', username: '@lera_nova', avatar: 'https://i.pravatar.cc/150?img=56' },
    track: {
      id: 't3',
      title: 'Lose Yourself',
      artist: 'Eminem',
      cover: 'https://picsum.photos/seed/loseyourself/80/80',
      iframeSrc: ym('4846', '18860'),
    },
    createdAt: '37 минут назад',
  },
  {
    id: 'p4',
    user: { id: 'u4', name: 'Денис Волков', username: '@dvolkov', avatar: 'https://i.pravatar.cc/150?img=21' },
    track: {
      id: 't4',
      title: 'Hotline Bling',
      artist: 'Drake',
      cover: 'https://picsum.photos/seed/hotlinebling/80/80',
      iframeSrc: ym('3481735', '24716214'),
    },
    createdAt: '1 час назад',
  },
  {
    id: 'p5',
    user: { id: 'u5', name: 'Катя Морозова', username: '@k_morozova', avatar: 'https://i.pravatar.cc/150?img=44' },
    track: {
      id: 't5',
      title: 'Rolling In The Deep',
      artist: 'Adele',
      cover: 'https://picsum.photos/seed/rollinginthedeep/80/80',
      iframeSrc: ym('718991', '2278985'),
    },
    createdAt: '2 часа назад',
  },
  {
    id: 'p6',
    user: { id: 'u6', name: 'Саша Белов', username: '@sasha_belov', avatar: 'https://i.pravatar.cc/150?img=15' },
    track: {
      id: 't6',
      title: 'bad guy',
      artist: 'Billie Eilish',
      cover: 'https://picsum.photos/seed/badguy/80/80',
      iframeSrc: ym('7190880', '51516485'),
    },
    createdAt: '3 часа назад',
  },
  {
    id: 'p7',
    user: { id: 'u7', name: 'Оля Петрова', username: '@o_petrova', avatar: 'https://i.pravatar.cc/150?img=49' },
    track: {
      id: 't7',
      title: 'Shape of You',
      artist: 'Ed Sheeran',
      cover: 'https://picsum.photos/seed/shapeofyou/80/80',
      iframeSrc: ym('4172931', '32947997'),
    },
    createdAt: '4 часа назад',
  },
  {
    id: 'p8',
    user: { id: 'u1', name: 'Аня Соколова', username: '@anya_sokolova', avatar: 'https://i.pravatar.cc/150?img=47' },
    track: {
      id: 't8',
      title: 'Radioactive',
      artist: 'Imagine Dragons',
      cover: 'https://picsum.photos/seed/radioactive/80/80',
      iframeSrc: ym('1597165', '3703085'),
    },
    createdAt: '5 часов назад',
  },
  {
    id: 'p9',
    user: { id: 'u2', name: 'Миша Орлов', username: '@m_orlov', avatar: 'https://i.pravatar.cc/150?img=33' },
    track: {
      id: 't9',
      title: 'Believer',
      artist: 'Imagine Dragons',
      cover: 'https://picsum.photos/seed/believer/80/80',
      iframeSrc: ym('4811514', '37865998'),
    },
    createdAt: '6 часов назад',
  },
  {
    id: 'p10',
    user: { id: 'u3', name: 'Лера Новикова', username: '@lera_nova', avatar: 'https://i.pravatar.cc/150?img=56' },
    track: {
      id: 't10',
      title: 'rockstar',
      artist: 'Post Malone ft. 21 Savage',
      cover: 'https://picsum.photos/seed/rockstar/80/80',
      iframeSrc: ym('5320162', '36999048'),
    },
    createdAt: '7 часов назад',
  },
  {
    id: 'p11',
    user: { id: 'u4', name: 'Денис Волков', username: '@dvolkov', avatar: 'https://i.pravatar.cc/150?img=21' },
    track: {
      id: 't11',
      title: 'Sunflower',
      artist: 'Post Malone & Swae Lee',
      cover: 'https://picsum.photos/seed/sunflower/80/80',
      iframeSrc: ym('5903084', '44103080'),
    },
    createdAt: '8 часов назад',
  },
  {
    id: 'p12',
    user: { id: 'u5', name: 'Катя Морозова', username: '@k_morozova', avatar: 'https://i.pravatar.cc/150?img=44' },
    track: {
      id: 't12',
      title: 'Umbrella',
      artist: 'Rihanna ft. Jay-Z',
      cover: 'https://picsum.photos/seed/umbrella/80/80',
      iframeSrc: ym('7112', '5570'),
    },
    createdAt: 'вчера',
  },
  {
    id: 'p13',
    user: { id: 'u6', name: 'Саша Белов', username: '@sasha_belov', avatar: 'https://i.pravatar.cc/150?img=15' },
    track: {
      id: 't13',
      title: 'Cadillac',
      artist: 'MORGENSHTERN & Элджей',
      cover: 'https://picsum.photos/seed/cadillac/80/80',
      iframeSrc: ym('11010830', '67155218'),
    },
    createdAt: 'вчера',
  },
  {
    id: 'p14',
    user: { id: 'u7', name: 'Оля Петрова', username: '@o_petrova', avatar: 'https://i.pravatar.cc/150?img=49' },
    track: {
      id: 't14',
      title: 'Вот так',
      artist: 'MORGENSHTERN',
      cover: 'https://picsum.photos/seed/vottak/80/80',
      iframeSrc: ym('5702424', '42977738'),
    },
    createdAt: '2 дня назад',
  },
  {
    id: 'p15',
    user: { id: 'u1', name: 'Аня Соколова', username: '@anya_sokolova', avatar: 'https://i.pravatar.cc/150?img=47' },
    track: {
      id: 't15',
      title: '35',
      artist: 'Тимати',
      cover: 'https://picsum.photos/seed/timati35/80/80',
      iframeSrc: ym('5654574', '42721510'),
    },
    createdAt: '3 дня назад',
  },
];
