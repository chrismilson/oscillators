# Oscillators

This is a small javascript simulation of coupled oscilators.

I was inspired to create this after watching [Matt Parker's
video](https://youtu.be/J4PO7NbdKXg) on the same phenomenon. The simulation
relies on the Kuramoto model and the design choices have been informed by
[Daniels'
paper](http://go.owu.edu/~physics/StudentResearch/2005/BryanDaniels/kuramoto_paper.pdf)

This site was made with [gatsby](https://www.gatsbyjs.org/)

## Algorithm

The current design of the algorithm makes several assumptions.

- There is some initial number of oscillators that are coupled.
- An oscillator is just a position in a two dimensional phase space - its
  current velocity and position from an equilibrium position.
