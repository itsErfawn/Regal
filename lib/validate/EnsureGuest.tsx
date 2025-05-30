'use client'

import { useEffect } from 'react'

export default function EnsureGuest() {
  useEffect(() => {
    fetch('/api/auth', {
      method: 'GET',
      credentials: 'include',
    });
  }, []);

  return null;
}
