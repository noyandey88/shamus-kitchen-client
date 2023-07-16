import React from 'react';
import useTitle from '../../Hooks/useTitle';
import { motion } from 'framer-motion';

const Blogs = () => {

  // update page title
  useTitle('Blogs');

  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <div className="divide-y divide-gray-300">
          <motion.div
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 50 }}
            viewport={{ once: true }}
            className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
            <h3 className="font-semibold md:col-span-5">What is the difference between SQL and NoSQL?</h3>
            <p className="md:pl-0 md:col-span-7">SQL pronounced as “S-Q-L” or as “See-Quel” is primarily called RDBMS or Relational Databases, whereas NoSQL is a Non-relational or Distributed Database. Comparing SQL vs NoSQL databases, SQL databases are table-based databases, whereas NoSQL databases can be document-based, key-value pairs, and graph databases. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases have a predefined schema, whereas NoSQL databases use a dynamic schema for unstructured data. Comparing NoSQL vs SQL performance, SQL requires specialized DB hardware for better performance while NoSQL uses commodity hardware.</p>
          </motion.div>
          <motion.div
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 40 }}
            viewport={{ once: true }}
            className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
            <h3 className="font-semibold md:col-span-5">What is JWT? How does it work?</h3>
            <p className="md:pl-0 md:col-span-7">
              <span className="block">
                JWT, or JSON Web Token, is an open standard (RFC 7519) that used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
              </span>
              <span className="block">In authentication, when the user successfully logs in using their credentials, a JSON Web Token will be returned. Since tokens are credentials, great care must be taken to prevent security issues. In general, you should not keep tokens longer than required.</span>
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 30 }}
            viewport={{ once: true }}
            className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
            <h3 className="font-semibold md:col-span-5">What is difference between JavaScript and NodeJs?</h3>
            <p className="md:pl-0 md:col-span-7">
              Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. JavaScript is basically used on the client-side. NodeJs is mostly used on the server-side. Javascript is capable enough to add HTML and play with the DOM. Nodejs does not have capability to add HTML tags. Javascript is used in frontend development. Nodejs is used in server-side development.
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 20 }}
            viewport={{ once: true }}
            className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
            <h3 className="font-semibold md:col-span-5">How does NodeJs handle multiple requests at the same time?</h3>
            <p className="md:pl-0 md:col-span-7">NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. If the current request uses blocking IO operations, the event loop sees whether there are threads available in the thread pool, picks up one thread from the thread pool and assigns the particular request to the picked thread. That thread does the blocking IO operations and sends the response back to the event loop and once the response gets to the event loop, the event loop sends the response back to the client.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;