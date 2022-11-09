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
      Logo Stars
    </button>
  );
}
function PointMaterialButton() {
  const router = useRouter();
  return (
    <button type="button" onClick={() => router.push('/point-material')}>
      Point Material
    </button>
  );
}
export default function Overlay() {
  return (
    <div class="flex flex-row">
      <div class="basis-16"><HomeButton /></div>
      <div class="basis-16"><StarsButton /></div>
      <div class="basis-16"><BlobButton /></div>
      <div class="basis-16"><LogoStarsButton /></div>
      <div class="basis-16"><PointMaterialButton /></div>
      {/* <div class="basis-16"><BlobButton /></div> */}
    </div>
  )
}
