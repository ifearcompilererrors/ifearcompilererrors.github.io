from django.shortcuts import get_object_or_404, render, render_to_response
from django.http import HttpResponseRedirect
from django.core.urlresolvers import reverse
from django.views import generic
from django.forms import ModelForm
from django.core.context_processors import csrf
from django.http import HttpResponse
from django.template import RequestContext, loader

from ifearcompilererrors.settings import MEDIA_URL, MEDIA_ROOT

import os,sys

# Create your views here.
def index(request):
	template_name = "index.html"
	context_object_name = 'home'

	template = loader.get_template(template_name)
	context = RequestContext(request,{
		'context_object_name': context_object_name,
		})
	return HttpResponse(template.render(context))