import React,{useState, useEffect} from "react";
import  { Redirect } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage"

export default function index() {
  const [isOnboarding, setIsOnboarding] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    const checkOnboarding = async () =>{
      const isOnboarding = await AsyncStorage.getItem("onboarding");
      if (isOnboarding) {
        setIsOnboarding(false);
      }
      setLoading(false);
    };
    checkOnboarding();
  }, []);
  return (
    <Redirect href={isOnboarding ? "/(routes)/onboarding" : "/(routes)/home"}/>
  )
}