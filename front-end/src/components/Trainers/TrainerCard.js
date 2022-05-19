import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function TrainerCard() {
  return (
    <ImageList sx={{ width: "700"}} cols={3} gap ={15}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=639,fit=crop/bronxltdlm/Rectangle-AMPJ7obDkMCEwjKm.png',
    title: 'Trainer1',
    author: 'description',
    featured: true,
  },
  {
    img: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=639,fit=crop/bronxltdlm/Rectangle-AMPJ7obDkMCEwjKm.png',
    title: 'Trainer2',
    author: 'description',
  },
  {
    img: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=639,fit=crop/bronxltdlm/Rectangle-AMPJ7obDkMCEwjKm.png',
    title: 'Trainer3',
    author: 'description',
  },
  {
    img: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=639,fit=crop/bronxltdlm/Rectangle-AMPJ7obDkMCEwjKm.png',
    title: 'Trainer4',
    author: 'description',
  },
  {
    img: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=639,fit=crop/bronxltdlm/Rectangle-AMPJ7obDkMCEwjKm.png',
    title: 'Trainer5',
    author: 'description',
  },
  {
    img: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=639,fit=crop/bronxltdlm/Rectangle-AMPJ7obDkMCEwjKm.png',
    title: 'Trainer6',
    author: 'description',
    featured: true,
  },
  {
    img: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=639,fit=crop/bronxltdlm/Rectangle-AMPJ7obDkMCEwjKm.png',
    title: 'Trainer5',
    author: 'description',
  },
  {
    img: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=639,fit=crop/bronxltdlm/Rectangle-AMPJ7obDkMCEwjKm.png',
    title: 'Trainer5',
    author: 'description',
  },
  {
    img: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=639,fit=crop/bronxltdlm/Rectangle-AMPJ7obDkMCEwjKm.png',
    title: 'Trainer5',
    author: 'description',
    
  },
  {
    img: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=639,fit=crop/bronxltdlm/Rectangle-AMPJ7obDkMCEwjKm.png',
    title: 'Trainer5',
    author: 'description',
  },
  {
    img: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=639,fit=crop/bronxltdlm/Rectangle-AMPJ7obDkMCEwjKm.png',
    title: 'Trainer5',
    author: 'description',
  },
  {
    img: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=639,fit=crop/bronxltdlm/Rectangle-AMPJ7obDkMCEwjKm.png',
    title: 'Trainer5',
    author: 'description',
    
  },
];
