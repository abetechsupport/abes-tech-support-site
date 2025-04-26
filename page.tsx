import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-blue-50 text-gray-800 p-6">
      <section className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-2">Abe's Tech Support</h1>
        <p className="text-lg mb-6">
          Helping all generations with technology—especially seniors who need kind, patient support.
        </p>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-lg">
          <a href="https://forms.gle/HnteSQuDMwHsk7TT8" target="_blank" rel="noopener noreferrer">
            Book an Appointment
          </a>
        </Button>
      </section>

      <section className="mt-12 max-w-4xl mx-auto grid gap-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">Services I Offer</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold text-lg">Tech Setup & Support</h3>
              <p>Phone, tablet, smart TV, and Wi-Fi setup, troubleshooting slow tech, and more.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold text-lg">One-on-One Tech Lessons</h3>
              <p>Learn how to use devices, apps, email, FaceTime, Zoom, and texting—patiently and clearly.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold text-lg">Digital Safety Help</h3>
              <p>Learn to spot scams, create strong passwords, and stay safe online with peace of mind.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold text-lg">Home Visits or Remote Help</h3>
              <p>Get tech help in-person or over video call. Always friendly, flexible, and personal.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mt-16 text-center">
        <p className="text-gray-600">Got questions or want to say hi? Reach out at <span className="font-medium">abe4seniortech@gmail.com</span></p>
      </section>
    </main>
  );
}
