// store.js
import { writable } from 'svelte/store';
import {Aircraft} from './logic/Aircraft'; // Assuming Aircraft is in the same directory

export const currentAircraft = writable(new Aircraft());