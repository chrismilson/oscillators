# Oscillators

This is a small javascript simulation of coupled oscilators.

I was inspired to create this after watching [Matt Parker's
video](https://youtu.be/J4PO7NbdKXg) on the same phenomenon. The simulation
relies on the Kuramoto model and the design choices have been informed by
[Daniels'
paper](http://go.owu.edu/~physics/StudentResearch/2005/BryanDaniels/kuramoto_paper.pdf)

## Design

The simulation consists of a number of oscilators that are 'coupled'.

An oscillator is just a position in phase space; an object with a velocity and a
displacement from some equilibrium position.

The oscillators will all evolve over time, and their evolution is a function of
the following properties:

1. The position of the oscillator.
2. The velocity of the oscillator.
3. The position of the other oscillators.

The first two properties alone can be used to simulate a harmonic oscillator.