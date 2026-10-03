"use client";
import { useEffect,useState } from "react";
import { community } from "@/components/community-client";
export default function OwnerLink(){const [owner,setOwner]=useState(false);useEffect(()=>{community().then(x=>setOwner(x.owner)).catch(()=>{});},[]);return owner?<a href="/admin">Owner dashboard</a>:null;}
