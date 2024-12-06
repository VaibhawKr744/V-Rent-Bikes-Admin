// src/app/api/proxy/bikes/route.js
import { NextResponse } from 'next/server';

const API_BASE_URL = 'http://bikerent.ap-south-1.elasticbeanstalk.com/api';

export async function GET() {
  try {
    const response = await fetch(`${API_BASE_URL}/bikes`);
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch bikes' },
      { status: 500 }
    );
  }
}