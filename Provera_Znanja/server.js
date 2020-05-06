const fs = require('fs');
const http = require('http');
const url = require('url');
const querystring = require('query-string');
const PATH = "www/";
let artikal = [
    {
        "id": 1,
        "naziv": "Prozor",
        "cena": "10000",
        "imeKompanije": "Aleksa"
    },
    {
        "id": 1,
        "naziv": "Vrata",
        "cena": "2000",
        "imeKompanije": "Storm"
    },
    {
        "id": 1,
        "naziv": "garaznavrata",
        "cena": "3700",
        "imeKompanije": "Conus"
    }
];

http.createServer(function (req, res){    
    let urlObj = url.parse(req.url,true,false);
    if (req.method == "GET"){
        if (urlObj.pathname == "/svi-artikli"){ 
            fs.readFile(PATH + "ssvi-artikli.html", function (err,data){
                if (err){
                    res.writeHead(404);
                    res.end(JSON.stringify(err));
                    return;
                }
                res.writeHead(200);
                res.end(data);
            });
        }
        if (urlObj.pathname == "/api/svi-artikli"){ 
            res.writeHead(200);
            data = JSON.stringify(sveOsobe());
            res.end(data);
        }
        if (urlObj.pathname == "/postavi-imekompanije"){
            fs.readFile(PATH + "postavi-imekompanije.html", function (err,data){
                if (err){
                    res.writeHead(404);
                    res.end(JSON.stringify(err));
                    return;
                }
                res.writeHead(200);
                res.end(data);
            });
        }
        if (urlObj.pathname == "/dodaj-osobu"){
            fs.readFile(PATH + "dodaj-osobu.html", function (err,data){
                if (err){
                    res.writeHead(404);
                    res.end(JSON.stringify(err));
                    return;
                }
                res.writeHead(200);
                res.end(data);
            });
        }
    }
    else if(req.method == "POST") {
        if (urlObj.pathname == "/postavi-imekompanije"){
            var body = '';
                req.on('data', function (data) {
                body += data;
            });
            req.on('end', function () {
                postaviAdresu(querystring.parse(body).id,querystring.parse(body).adresa)
                res.writeHead(302, {
                    'Location': '/postavi-imekompanije'
                });
                res.end()
            });
        }
        if (urlObj.pathname == "/obrisi-Artikal"){
            var body = '';
                req.on('data', function (data) {
                body += data;
            });
            req.on('end', function () {
                obrisiOsobu(querystring.parse(body).id);
                res.writeHead(302, {
                    'Location': '/Svi-Artikli'
                });
                res.end();
            });
        }
        if (urlObj.pathname == "/dodaj-artikal"){
            var body = '';
                req.on('data', function (data) {
                body += data;
            });
            req.on('end', function () {
                dodajOsobu(querystring.parse(body).id,querystring.parse(body).ime,
                           querystring.parse(body).prezime,querystring.parse(body).adresa);
                res.writeHead(302, {
                    'Location': '/dodaj-artikal'
                });
                res.end();
            });
        }
    }
}).listen(5000);

function sveArtikli(){
    return Artikli;
}
function izmeniArtikal(id,naziv,cena,imekompanije){
    for(let i=0;i<adresa.length;i++){
        if(artikal[i].id == id){
            artikal[i].adresa = imekompanije

        }
    }
}
function obrisiArtikal(id){
    let pomocni = []
    for(let i=0;i<osobe.length;i++){
        if(osobe[i].id != id){
            pomocni.push(osobe[i])
        }
    }
    osobe = pomocni
    return artikal
}
function dodajArtikal(id,naziv,cena,imekompanije){
    let artikal = {
        'id': id,
        'naziv': Nziv,
        'cena': cena,
        'ImeKompanije': imekompanije
    };
    artikal.push(artikal);
}