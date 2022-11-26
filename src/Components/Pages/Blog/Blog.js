import React from "react";

const Blog = () => {
  return (
    <section className="dark:bg-secondary dark:text-gray-100">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 ">
          <details className="text-xl font-light">
            <summary className="py-2 cursor-pointer hover:underline">
              What are the different ways to manage a state in a React
              application?
            </summary>
            <div className="p-4">
              <p>
                There are four main types of state you need to properly manage
                in your React apps:
                <ul className="">
                  <li>1. Local state</li>
                  <li>2. Global state </li>
                  <li>3. Server state </li>
                  <li>4. URL state</li>
                </ul>
              </p>
            </div>
          </details>
          <details className="text-xl font-light">
            <summary className="py-2 cursor-pointer hover:underline">
              How does prototypical inheritance work?
            </summary>
            <div className="p-4">
              <p>
                prototypical inheritance refers to the ability to access object
                properties from another object. We use a JavaScript prototype to
                add new properties and methods to an existing object
                constructor. We can then essentially tell our JS code to inherit
                properties from a prototype. Prototypical inheritance allows us
                to reuse the properties or methods from one JavaScript object to
                another through a reference pointer function. All JavaScript
                objects inherit properties and methods from a prototype:
                <li>Date objects inherit from Date.prototype.</li>
                <li>Array objects inherit from Array.prototype.</li>
                <li>Player objects inherit from Player.prototype.</li>
                The Object.prototype is on top of the prototype inheritance{" "}
                <chain className="br"></chain>
                Date objects, Array objects, and Player objects all inherit from
                Object.prototype.
              </p>
            </div>
          </details>
          <details className="text-xl font-light">
            <summary className="py-2 cursor-pointer hover:underline">
              What is a unit test? Why should we write unit tests?
            </summary>
            <div className="p-4">
              <p>
                A unit test is a way of testing a unit - the smallest piece of
                code that can be logically isolated in a system. In most
                programming languages, that is a function, a subroutine, a
                method or property. The isolated part of the definition is
                important. In his book "Working Effectively with Legacy Code",
                author Michael Feathers states that such tests are not unit
                tests when they rely on external systems: “If it talks to the
                database, it talks across the network, it touches the file
                system, it requires system configuration, or it can't be run at
                the same time as any other test."
                <br />
                Unit tests save time and money. Usually, we tend to test the
                happy path more than the unhappy path. If you release such an
                app without thorough testing, you would have to keep fixing
                issues raised by your potential users. The time to fix these
                issues could've been used to build new features or optimize the
                existing system. Bear in mind that fixing bugs without running
                tests could also introduce new bugs into the system.
              </p>
            </div>
          </details>
          <details className="text-xl font-light">
            <summary className="py-2 cursor-pointer hover:underline">
              React vs. Angular vs. Vue?
            </summary>
            <div className="p-4">
              <p>
                React, developed by Facebook, was initially released in 2013.
                Facebook uses React extensively in their products (Facebook,
                Instagram, and WhatsApp). Similar to Vue, the React developers
                also announce their newest version on the blog section of the
                React website.
                <br />
                <br />
                Angular, developed by Google, was first released in 2010, making
                it the oldest of the lot. It is a TypeScript-based JavaScript
                framework. A substantial shift occurred in 2016 on the release
                of Angular 2 (and the dropping of the “JS” from the original
                name – AngularJS). Angular 2+ is known as just Angular. Although
                AngularJS (version 1) still gets updates, we will focus the
                discussion on Angular.
                <br />
                <br />
                Vue, also known as Vue.js, is the youngest member of the group.
                It was developed by ex-Google employee Evan You in 2014. Over
                the last several years, Vue has seen a substantial shift in
                popularity, even though it doesn’t have the backing of a large
                company. The most current version is always announced on the
                official Vue website on their releases page. Contributors for
                Vue are supported by Patreon. It should be noted that Vue also
                has its own GitHub repo, and functions using TypeScript.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Blog;
