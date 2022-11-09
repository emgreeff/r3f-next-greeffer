// import { useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/router'
// import { useControls, folder } from 'leva'
'use client';

// import { useRouter } from 'next/navigation';

function HomeButton() {
  const router = useRouter();
  return (
    <button type="button" onClick={() => router.push('/')}>
      Home
    </button>
  );
}
function StarsButton() {
  const router = useRouter();
  return (
    <button type="button" onClick={() => router.push('/stars')}>
      Stars
    </button>
  );
}
function BlobButton() {
  const router = useRouter();
  return (
    <button type="button" onClick={() => router.push('/blob')}>
      Blob
    </button>
  );
}
function LogoStarsButton() {
  const router = useRouter();
  return (
    <button type="button" onClick={() => router.push('/logo-stars')}>
      LogoStars
    </button>
  );
}
function PointMaterialButton() {
  const router = useRouter();
  return (
    <button type="button" onClick={() => router.push('/point-material')}>
      PointMaterial
    </button>
  );
}
export default function Overlay() {
  return (
    <div className="flex flex-row">
      <div className="basis-24"><HomeButton /></div>
      <div className="basis-24"><StarsButton /></div>
      <div className="basis-24"><BlobButton /></div>
      <div className="basis-24"><LogoStarsButton /></div>
      <div className="basis-24"><PointMaterialButton /></div>
      {/* <div class="basis-16"><BlobButton /></div> */}
    </div>
  )
}
