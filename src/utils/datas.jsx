import { BsPeopleFill, BsBalloonHeartFill, BsWhatsapp } from 'react-icons/bs';
import { GiOpenBook } from 'react-icons/gi';
import { PiTimerBold, PiEnvelopeSimpleOpen } from 'react-icons/pi';
import { FiMapPin } from 'react-icons/fi';
import { TfiGallery } from 'react-icons/tfi';

export const datas = [
  {
    icon: (
      <BsPeopleFill
        key={1}
        size={28}
        color='white'
      />
    ),
    judul: 'Tamu Undangan',
    isi: 'Undang semua teman dan kerabat Anda tanpa ada batasan jumlah',
  },
  {
    icon: (
      <GiOpenBook
        key={2}
        size={28}
        color='white'
      />
    ),
    judul: 'Buku Tamu',
    isi: 'Ketahui siapa saja teman / kerabat Anda yang akan hadir atau tidak hadir.',
  },
  {
    icon: (
      <PiTimerBold
        key={3}
        size={28}
        color='white'
      />
    ),
    judul: 'Countdown Timer',
    isi: 'Hitung mundur ke momen paling indah dalam hidup Anda.',
  },
  {
    icon: (
      <PiEnvelopeSimpleOpen
        key={4}
        size={28}
        color='white'
      />
    ),
    judul: 'Amplop Digital',
    isi: 'Proses pengiriman amplop instant dan cashless.',
  },
  {
    icon: (
      <FiMapPin
        key={5}
        size={28}
        color='white'
      />
    ),
    judul: 'Peta Alamat',
    isi: 'Petunjuk Google Maps yang dapat mempermudah tamu undangan menuju ke lokasi..',
  },
  {
    icon: (
      <TfiGallery
        key={6}
        size={28}
        color='white'
      />
    ),
    judul: 'Galeri Foto',
    isi: 'Tunjukan foto dan video indah Anda kepada tamu undangan.',
  },
  {
    icon: (
      <BsBalloonHeartFill
        key={7}
        size={28}
        color='white'
      />
    ),
    judul: 'Cerita Pasangan',
    isi: 'Biarkan tamu undangan Anda tahu bagaimana Anda bertemu pasangan hidup Anda.',
  },
  {
    icon: (
      <BsWhatsapp
        key={8}
        size={28}
        color='white'
      />
    ),
    judul: 'Share Whatsapp',
    isi: 'Fitur terbaik untuk mempermudah Anda untuk membagikan undangan melalui whatsapp.',
  },
];

export const photos = [
  '/img/none.jpg',
  '/img/none.jpg',
  '/img/none.jpg',
  '/img/none.jpg',
  '/img/none.jpg',
];
