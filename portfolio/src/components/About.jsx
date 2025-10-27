import React from 'react'

export default function About() {
	return (
    <section id="about" className='bg-blue flex flex-col items-center justify-center text-center px-6'>
      <div className='max-w-2xl'>
        <h1 className='text-4xl text-White mb-4'>About Me</h1>
        <p className='text-lg font-semibold text-White mb-6'>  I’m a passionate software development student at who is a vibrant team player and enjoys problem solving. I’m also excited to apply what I’ve learned in my course to real-world projects and build impactful tech solutions</p>
        <a href="./Lesley-Eric-CV.pdf"  class="btn btn-primary"> Download CV </a>
      </div>
        </section>
	)
}
