import * as express from "express";
import {repository_bookmark} from "../lib/Repository/bookmark";
import {service_bookmark} from "../lib/Service/bookmark";


const app = express();
const repository = repository_bookmark;
const service = service_bookmark;