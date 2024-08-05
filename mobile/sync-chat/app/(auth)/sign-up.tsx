import { View, Text, TextInput } from 'react-native'
import React from 'react'
import FormLayout from '@/components/layouts/FormLayout';

const SignUp = () => {
  return (
    <FormLayout isLogin={false}>
      <View className="w-full gap-y-1.5">
        <Text className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Username
        </Text>
        <TextInput
          placeholder="Enter your username"
          className="h-12 w-full px-5 rounded-md border border-input"
        />
      </View>
      <View className="w-full gap-y-1.5">
        <Text className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Email
        </Text>
        <TextInput
          placeholder="Type here..."
          className="h-12 w-full px-5 rounded-md border border-input"
        />
      </View>
      <View className="w-full gap-y-1.5">
        <Text className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Password
        </Text>
        <TextInput
          placeholder="Enter your password"
          className="h-12 w-full px-5 rounded-md border border-input"
        />
      </View>
    </FormLayout>
  );
}

export default SignUp